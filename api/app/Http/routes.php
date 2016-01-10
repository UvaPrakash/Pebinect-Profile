<!-- 
 Description:
 Created on: Dec 27, 2015 
 Modified on:
 Modified by:  
 Version: 
 Changes made since last version:
-->
<?php

Route::post('profile','UserController@profile');

Route::group(['prefix' => 'webapi'], function () {
    Route::post('profile','UserController@profile');
    Route::resource('user', 'UserController');
    });