<?php

namespace App\Http\Controllers\api\v1;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;


class Users extends BaseController
{
    public function test() {
        return User::all();
    }
}
