var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
  SALT_WORK_FACTOR = 10,
	emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  // bcrypt = require('bcrypt'),

var UserSchema = new Schema({
	username: { type: String, required: true, index: { unique: true }, trim: true },
	password: { type: String, required: true },
	email: { type: String, trim: true },
});

// UserSchema.methods.comparePassword = function (password, fn) {
//   console.log(bcrypt.compare(password, this.password, fn));
// }

// UserSchema.pre('save', function(next) {
//     var user = this;
    // return if password and email have not been modified
    // if (!user.isModified('email') && !user.isModified('password')) return next();
    //
    // return error if email address is not valid;
    // if (!emailRegExp.test(user.email)) return next(new Error('Email address is not valid'));

    // hash the password along with generated salt
    // bcrypt.hash(this.password, SALT_WORK_FACTOR, function(err, hash) {
    //   if (err) return next(err);
    //
    //   // override the cleartext password with the hashed one
    //   user.password = hash;
    //   next();
    // });
// });

mongoose.model('User', UserSchema);
