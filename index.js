async function getUser(url) {
    let output = await fetch(url)
    return await output.json()
}

const blogBlurbs = [
    "10 Ways to Transform Your Morning Routine for Maximum Productivity!",
    "How AI is Changing the Way We Work, Learn, and Live: Insights from 2024",
    "The Secret to Perfect Pasta Every Time: Chef-Approved Tips",
    "Why Everyone is Talking About Sustainable Living (and How You Can Join In)",
    "Top 5 Apps You Need Right Now for a Healthier Lifestyle",
    "Travel Like a Pro: Packing Hacks That Will Change the Way You Vacation",
    "From Zero to Hero: How One Entrepreneur Built a Multi-Million Dollar Business",
    "The Future of Gaming: What to Expect in the Next Decade",
    "Mastering Mindfulness: Simple Practices to Reduce Stress in Your Daily Life",
    "Why This Year's Tech Trends Are More Exciting Than Ever!"
  ];
 
 
 getUser('https://jsonplaceholder.typicode.com/users/').then((json) =>{
    let names = document.getElementById('names')
    let email = document.getElementById('emails')
    let posts = document.getElementById('posts')

    for (let i = 0; i < 10; i++){
       names.innerHTML += JSON.stringify(json[i].name) + " / " + JSON.stringify(json[i].username) + "<br>"
       email.innerHTML += JSON.stringify(json[i].email) + "<br>"
       posts.innerHTML += blogBlurbs[i] + "<br> <br>"
    }
   
    console.log(json)
 
 
 })
 