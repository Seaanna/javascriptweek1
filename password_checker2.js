

function areCredentialsValid() {
  var Id = prompt("What do you want your Id to be?");
  var password = prompt("What do you want your password to be?");

  return {
    isIdValid: function() {
        Id.length >= 6 && !Id.includes("#") && !Id.includes("!") && !Id.includes("$");
      },

    isPasswordValid: function() {
        password != "password" && password.length >= 6
        && (password.includes ("#") || password.includes ("$") || password.includes ("!"))
        && (
          password.includes ("1")
          || password.includes ("2")
          || password.includes ("3")
          || password.includes ("4")
          || password.includes ("5")
          || password.includes ("6")
          || password.includes ("7")
          || password.includes ("8")
          || password.includes ("9")
          || password.includes ("0"))
          && (password != password.toUpperCase() && password != password.toLowerCase());
      },

      finalCheck: function() {
        this.isIdValid() === this.isPasswordValid();
      },

      hello: function() {
        return ("Your credentials are valid: " + this.finalCheck());
      },
    // closes return
    }
  // closes function
  }

  var valid = areCredentialsValid()
  valid.finalCheck();
  valid.hello();
