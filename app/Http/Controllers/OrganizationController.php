<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Resources\OrganizationResource;
use App\Models\Organization;

class OrganizationController extends Controller
{
    public function store(StoreOrganizationRequest $request)
    {
        preg_match('#/org/[^/]+/(\d+)#', $request->url, $m);
        $org = Organization::firstOrFail();
        $org->update(['url' => $request->url, 'business_id' => $m[1] ?? null]);
        return new OrganizationResource($org);
    }

    public function show()
    {
        return new OrganizationResource(Organization::firstOrFail());
    }
}
