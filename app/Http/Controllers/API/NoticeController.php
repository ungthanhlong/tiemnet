<?php

namespace App\Http\Controllers\API;

use App\Events\NoticeEvent;
use App\Http\Controllers\Controller;
use App\Models\NoticeModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoticeController extends Controller
{
    public function notice()
    {
        DB::beginTransaction();
        try {

           $notice = new NoticeModel;
           $notice->content = 'abc';
           $notice->save();
            DB::commit();
                $response['message'] = "Thêm Thành Công";
                $response['success'] = true;

        } catch (\Exception$e) {
            DB::rollback();
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

}
