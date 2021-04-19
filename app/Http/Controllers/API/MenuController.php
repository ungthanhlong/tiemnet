<?php

namespace App\Http\Controllers\API;

use App\Events\OrderEvent;
use App\Http\Controllers\Controller;
use App\Models\ComputerModel;
use App\Models\MenuModel;
use App\Models\OrderModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{
    public function list()
    {

        try {
            $data = MenuModel::all();
            $response['data'] = $data;
            $response['success'] = true;

        } catch (\Exception$e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function order(Request $request)
    {
        DB::beginTransaction();
        try {
            $computer = ComputerModel::where('user_id',Auth::id())->first();
            $response['order'] = $computer->name.' : ';
            for($i = 0; $i < count($request->order); $i++){

                    $menu = MenuModel::where('id',$request->order[$i]["value"])->first();
                    $data['user_id'] = Auth::id();
                    $data['computer_id'] = $computer->id;
                    $data['menu_id'] = $request->order[$i]["value"];
                    $data['total'] = $request->order[$i]["total"];
                    OrderModel::create($data);
                    $response['order'] = $response['order'].$request->order[$i]["total"].' '.$menu->name.' ';


            }
            DB::commit();
            $response['message'] = "Order thành công";
            $response['success'] = true;

        } catch (\Exception$e) {
            DB::rollback();
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        if($response['success']){
            $event = new OrderEvent($response['order']);
            event($event);
        }
        return $response;
    }
}
