Enemy bowser = new Enemy("Bowser");
Attack fireBreath = new Attack("Fire Breath", 10);
Attack tailSwipe = new Attack("Tail Swipe", 5);
Attack headSmash = new Attack("Head Smash", 20);
bowser.addAttack(fireBreath);
bowser.addAttack(tailSwipe);
bowser.addAttack(headSmash);
bowser.randomAttack();