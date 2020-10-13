<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\Users;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('spa', [App\Http\Controllers\HomeController::class, 'index']);
});

Route::get('/api/users', [Users::class, 'test'])->name('api.users');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
