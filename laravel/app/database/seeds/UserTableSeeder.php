<?php

class UserTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();
        User::create(array('email' => 'chinmay@chinmay.ca', 'password' => 'asdf'));
    }

}