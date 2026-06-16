<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FunFact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FunFactController extends Controller
{
    
    public function index()
    {
      
        $facts = FunFact::firstOrCreate(['id' => 1]);

        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/FunFactsEdit', [
            'facts' => $facts
        ]);
    }

    
    public function update(Request $request)
    {
        $request->validate([
            'card1_label' => 'required|string|max:255',
            'card1_value' => 'required|integer|min:0',
            'card2_label' => 'required|string|max:255',
            'card2_value' => 'required|integer|min:0',
            'card3_label' => 'required|string|max:255',
            'card3_value' => 'required|integer|min:0',
            'card4_label' => 'required|string|max:255',
            'card4_value' => 'required|integer|min:0',
        ]);

        $facts = FunFact::findOrFail(1);
        $facts->update($request->all());

        return redirect()->back()->with('success', 'Fun Facts updated successfully!');
    }
}
