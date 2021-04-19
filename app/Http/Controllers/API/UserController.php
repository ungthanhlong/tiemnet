<?php

namespace App\Http\Controllers\API;

use App\Events\AccessComputerEvent;
use App\Events\ExitComputerEvent;
use App\Http\Controllers\Controller;
use App\Models\ClassModel;
use App\Models\ComputerModel;
use App\Models\RoleModel;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function loginCustomer(Request $request)
    {
        DB::beginTransaction();
        try {
            $check = ComputerModel::where('id',$request->id)->first();
            $checkuser = User::where('name',$request->name)->whereHas('computer')->first();
            if($checkuser == null){
                if($check->user_id == null){
                    if (Auth::attempt(['name' => $request->name, 'password' => $request->password, 'type' => 'customer'])) {

                        $user = User::where('name', $request->name)->first();
                        $data['user_id'] = $user->id;
                        ComputerModel::where('id',$request->id)->update($data);
                        $computer = ComputerModel::where('id',$request->id)->first();
                        DB::commit();
                        $response['token'] =  $user->createToken('MyApp')->plainTextToken;
                        $response['success'] = true;
                        $response['data'] = $user;
                        $response['type'] = $user->type;
                        $response['computer'] = $computer->name;


                    } else {
                        $response['success'] = false;
                        $response['message'] = "Tài khoản hoặc mật khẩu không đúng";
                    }
                }
                else{
                    $response['success'] = false;
                    $response['message'] = "Máy đã có người dùng";
                }
            }
            else{
                $response['success'] = false;
                    $response['message'] = "Tài khoản đã đăng nhập nơi khác";
            }


         } catch (\Exception$e) {
             DB::rollback();
             $response['message'] = $e->getMessage();
             $response['success'] = false;
         }

         if($response['success']){
        $event = new AccessComputerEvent($response['computer'].' : '.$response['data']['name']. ' đã đăng nhập');
        event($event);
    }
        return $response;
    }

    public function loginSystem(Request $request)
    {

            if (Auth::attempt(['name' => $request->name, 'password' => $request->password, 'type' => 'admin'])) {

                $user = User::where('name', $request->name)->first();
                $response['token'] =  $user->createToken('MyApp')->plainTextToken;
                $response['success'] = true;
                $response['data'] = $user;
                $response['type'] = $user->type;
            } else {
                $response['success'] = false;
                $response['message'] = "Tài khoản hoặc mật khẩu không đúng";
            }
        return $response;
    }


    public function logoutCustomer()
    {
        DB::beginTransaction();
        try {

            if(Auth::user()){
                $idUser = Auth::id();
                $computer = ComputerModel::where('user_id',Auth::id())->first();
                $response['computer'] = $computer->name;
                $data['user_id'] = null;
                ComputerModel::where('user_id',$idUser)->update($data);
                $user = User::where('id', $idUser)->first();
                $user->tokens()->delete();
                DB::commit();
                $response['success'] = true;

            }
            else{
                $response['success'] = false;
                $response['message'] = "Không thể đăng xuất";
            }

         } catch (\Exception$e) {
             DB::rollback();
             $response['message'] = $e->getMessage();
             $response['success'] = false;
         }

         if($response['success']){

            $event = new ExitComputerEvent($response['computer']. ' đã đăng xuất');
            event($event);
         }
         return $response;

    }



    public function logout()
    {
        if(Auth::user()){
            $idUser = Auth::id();
            $user = User::where('id', $idUser)->first();
            $user->tokens()->delete();

            $response['success'] = true;
        }
        else{
            $response['success'] = false;
            $response['message'] = "Không thể đăng xuất";
        }
        return $response;

    }

    public function getUser()
    {
        try {
            $response['data'] = User::where('id', Auth::id())->with('role.assignment')->first();
            $response['success'] = true;

        } catch (\Exception$e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;

    }

    public function test()
    {
        return User::where('name','nguoidung1')->whereHas('computer')->first();
    }






}
