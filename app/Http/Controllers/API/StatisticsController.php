<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OrderModel;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function listOrder()
    {

        try {
            $data = OrderModel::with(['user','computer','menu'])->orderByDesc('updated_at')->get();
            $response['data'] = $data;
            $response['success'] = true;

        } catch (\Exception$e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
}
