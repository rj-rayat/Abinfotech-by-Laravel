<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Users/index',[
            'users' => User::select('id', 'email', 'name', 'role', 'created_at')->get()
        ]);
    }


    public function store(Request $request){
        $request->validate([
            'name'=> 'required|string|max:255',
            'email'=> 'required|string|email|max:255|unique:users',
            'password'=>'required|string|min:8',
            'role'=>'required|string|in:user, admin, editor, super admin'
        ]);

        User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
            'role'=> $request->role
        ]);

        return redirect()->back()->with('success', 'User created successfully!');
    }
}
