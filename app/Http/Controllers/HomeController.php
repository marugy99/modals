<?php
use JavaScript;

class HomeController extends Controller
{
    public function index()
    {
        JavaScript::put([
            'name' => 'Maru'
        ]);

        return view('welcome');
    }
}