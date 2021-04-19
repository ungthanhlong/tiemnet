<?php

namespace App\Http\Controllers\API;

use App\Events\AccessComputerEvent;
use App\Events\NoticeEvent;
use App\Http\Controllers\Controller;
use App\Models\ComputerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComputerController extends Controller
{
    public function list()
    {

        try {
            $data = ComputerModel::with('user')->get();
            $response['data'] = $data;
            $response['success'] = true;

        } catch (\Exception$e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function accessComputer($id)
    {
        DB::beginTransaction();
        try {

            $update['user_id'] = 1;
            ComputerModel::where('id',$id)->update($update);

            $data = ComputerModel::where('id',$id)->first();
            DB::commit();
            $response['data'] = $data;
            $response['success'] = true;

        } catch (\Exception$e) {
            DB::rollback();
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        if($response['success']){
            $event = new AccessComputerEvent($response);
            event($event);
        }
        return $response;
    }
}
