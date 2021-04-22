<?php

use App\Http\Controllers\API\AllProfessionController;
use App\Http\Controllers\API\AllSubjectController;
use App\Http\Controllers\API\AssignmentController;
use App\Http\Controllers\API\ClassController;
use App\Http\Controllers\API\ComputerController;
use App\Http\Controllers\API\EducationController;
use App\Http\Controllers\API\MenuController;
use App\Http\Controllers\API\NoticeController;
use App\Http\Controllers\API\OfficersController;
use App\Http\Controllers\API\ProfessionController;
use App\Http\Controllers\API\SemesterController;
use App\Http\Controllers\API\SheetController;
use App\Http\Controllers\API\StatisticsController;
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\SystemClassController;
use App\Http\Controllers\API\SystemProfessionController;
use App\Http\Controllers\API\TranscriptController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\WorkAssignedController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/





    Route::post('/loginCustomer', [UserController::class, 'loginCustomer']);
    Route::post('/loginSystem', [UserController::class, 'loginSystem']);
    Route::middleware('auth:sanctum')->get('/logoutCustomer', [UserController::class, 'logoutCustomer']);
    Route::middleware('auth:sanctum')->get('/logout', [UserController::class, 'logout']);
    Route::middleware('auth:sanctum')->get('/listMenu', [MenuController::class, 'list']);
    Route::middleware('auth:sanctum')->post('/order', [MenuController::class, 'order']);
    Route::middleware('auth:sanctum')->get('/getUser', [UserController::class, 'getUser']);
    Route::get('/customer-list-computer', [ComputerController::class, 'list']);
    Route::get('/accessComputer/{id}', [ComputerController::class, 'accessComputer']);
    Route::middleware('auth:sanctum')->prefix('/statistics')->group(function () {
        Route::get('/listOrder', [StatisticsController::class, 'listOrder']);
    });












