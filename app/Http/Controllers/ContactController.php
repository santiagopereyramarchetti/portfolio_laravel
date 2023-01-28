<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $request)
    {
        Mail::to('santiagopereyra2702@gmail')->send(new ContactMail($request->name, $request->email, $request->body));
        return Redirect::back();
    }
}
