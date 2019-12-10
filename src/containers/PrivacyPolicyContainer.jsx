import React from 'react'

const PrivacyPolicyContainer = () => (
    <div className="container">
        <p>
            <b>Adoptable privacy policy: </b><br />
            In an effort to be fully transparent with all who use our site here are the ways we are collecting and managing your data:
        </p>
        <p>
            <b>What data we are collecting: </b><br />
            The data we directly collect and store is the data that you the user explicitly provide us with. You provide you data in a few ways. The first most obvious way is physically entering it in our account registration forms. The minimum info you give to us here is: name, email-address, and physical address. Another way you give us data is by sharing your location with us. Our website uses location services to determine where you are accessing the site from so we can provide you with the most relevant animal content. We explicitly ask you if you want to share this with us as soon as you logon to our webpage and we don’t store any of the location information for analytical purposes. After you leave the site we don’t store any of that location data anymore! 
            The rest of the data name, email-address and physical address are so that once you have found an animal that you like, it makes it possible to connect you directly with the shelter. You are in control of this information flow however and you are the one that initiates contact with the user who posted the animal.
        </p>
        <p>
            <b>How we secure your data and who has access: </b><br />
            We store all of the data you provide to us in cryptographically secure servers. We also encrypt all passwords meaning that your account information is secure and none of your passwords are stored in plain text. If someone were to break in and physically steal our hard drives, they still wouldn’t have access to your account because the passwords are encrypted.
        </p>
        <p>
            <b>How you control your data: </b><br />
            First and foremost you control all of the data you give to us. You can choose to not share your location, or give us any contact information but this will limit functionality of the site. You are in no way forced to use these services if you don’t want them. In addition, if you choose to delete your account with us we will purge all data associated with your account from the server forever. No lingering ghost profiles.
            What data our third-party partner is collecting:
            While we can only guarantee our own data policy we also use a third-party api called “Pet-Finder” that helps provide animal listings for the site. This is how we are able to aggregate all of those lovable animals for you to browse through. If you are posting an animal listing on the site it also submits it through this third-party api.
            We have vetted this third-party service and have found it’s privacy policy to be reasonable although they do collect more data than we do because they are a much larger service. Rather than glossing over it, we think it’s important that you view it yourself here.
        </p>
    </div>
)

export default PrivacyPolicyContainer;
