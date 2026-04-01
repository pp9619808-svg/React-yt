
import Card from './assets/components/Caed'

const App = () => {
  const jobs = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2A2gxUuygCwnyVZKNiD1kHe32oGYuZrrPg&s",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://yt3.googleusercontent.com/3b73AYEMMfa3SX5KJMeygio9smTPvrPrpicuQZbfQ_2DN7dV_ApiRM4CdYjSprEy1YYvt_9b=s900-c-k-c0x00ffffff-no-rj",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://assets.bizclikmedia.net/220/0f5d9de756b68dbb0807157bd7a0504c:8df41139d01a947bf8c53094cfde8aa6/google-g-logo-svg.png",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://www.clipartmax.com/png/middle/218-2188854_tesla-logo-red-png-clipart-tesla-motors.png",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu42wbJpv5_Bp0FNCQxq08MGZ6YnlQ9DT21Q&s",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://media.licdn.com/dms/image/v2/D560BAQHilaKdJueUVg/company-logo_200_200/B56ZodIp56HUAM-/0/1761425400480?e=2147483647&v=beta&t=-tNun5V2BRDck_2umtf0ZcPnEoaTicnbr3RnWud4Eag",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://vcwire.tech/wp-content/uploads/2025/10/Salesforce.png",
    companyName: "Salesforce",
    datePosted: "2 months ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Hyderabad, India"
  }
];
console.log(jobs)

  return (
    <div className='parent'>
    {jobs.map(function(elem){
      return <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandlogo} datePosted={elem.datePosted} location={elem.location} />
    })}
  
    </div>
  )
}

export default App
 