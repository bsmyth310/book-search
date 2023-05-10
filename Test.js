<form class="signupform">
    <div class="form-group">
        <label for="signupusername">Username</label>
        <input type="text" class="form-control" id="inputusername" placeholder="username">
    </div>
    <div class="form-group">
        <label for="signuppassword">Password</label>
        <input type="password" class="form-control" id="signuppassword" placeholder="password">
    </div>
    <div class="form-group">
        <input type="password" class="form-control" id="signuppassword2" placeholder="repeat your password">
    </div>
    <button type="submit" class="btn btn-primary" id="signupsubmit">Submit</button>
</form>

<form class="loginform">
    <div class="form-group">
        <label for="loginusername">Username</label>
        <input type="text" class="form-control" id="inputusername" placeholder="username">
    </div>
    <div class="form-group">
        <label for="loginpassword">Password</label>
        <input type="password" class="form-control" id="loginpassword" placeholder="password">
    </div>
    <button type="submit" class="btn btn-primary" id="loginsubmit">Submit</button>
    <a href="/signup">Signup</a>
</form>

<form class="newpost">
    <div class="form-group">
        <input type="text" class="form-control" id="posttitle" placeholder="post title">
    </div>
    <div class="form-group">
        <textarea class="form-control" id="posttext" rows="5" placeholder="your post goes here"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" id="postsubmit">Submit</button>
</form>