export default {

    template: `
    <div class="container">
        <h1>Sign Up For Flashback</h1>



        <form action="includes/signUp.php" method="post">

            <input type="name" for="first-name" placeholder="First Name">

            <input type="name" for="last-name" placeholder="Last Name">

            <input type="email" for="email" placeholder="Email">

            <input type="age" for="age" placeholder="Age">

            <button type="submit">Submit</button>
        </form>
    </div>
    `}