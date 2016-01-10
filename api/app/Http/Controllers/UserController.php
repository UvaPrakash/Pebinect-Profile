<!-- 
 Description:
 Created on: Dec 27, 2015 
 Modified on:
 Modified by:  
 Version: 
 Changes made since last version:
-->

<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Model\User;
use App\Http\Service\UserService;
use App\Http\Validator\UserValidator;

use App\Http\Requests;
use App\Http\Controllers\Controller;


class UserController extends Controller
{
   public function register(Request $request)
   {
           $user                =   new User();
           $userService         =   new UserService();
           $uservalidator       =   new UserValidator();
           
           $response            =   array();
           
           if(!$uservalidator->userRegistrationValidator($request))
           {
                $response        =   array("status"=>"failure","message"=>"Validation Error Occurs");
           }
           else
           {
                $user->first_name    =   $request->firstName;
                $user->last_name     =   $request->lastName;
                $user->email_id      =   $request->emailId;
                $user->password      =   $request->password;
                
                $response            =   $userService->createuser($user);  
           }
           
        return $response;   
   }
   
   public function login(Request $request)
   {
        
   }
   
   public function profile(Request $request)
        {
            $user_name  = $request->user_name;
            $designation   = $request->designation;
            $about       = $request->about;
            
            
     
                $profile        = new User();
            
                $profile->user_name = $user_name;
                $profile->designation  = $designation;
                $profile->about      = $about;
                
                try
                {
                    $result = $profile->save();
                    if($result)
                    {
                        $response = array("status"=>"Success","message"=>"Data Inserted Successfully");
                    }
                    else 
                    {
                        $response = array("status"=>"Failure","message"=>"Data Insertion Failure");
                    }
                } 
                catch (Exception $ex) 
                {
                    $response = array("status"=>"Failure","message"=>"Error occurs please try again later","exception"=>$e);
                }
           
           return json_encode($response);
        }
}
