let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/OGMovieCast", (req, res) => {
  let team = [
    {name : "Pawan Kalyan", imageUrl : "https://i.ytimg.com/vi/39DtlwpSBHc/maxresdefault.jpg"},
    { name: "Priyanka Mohan", imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLRkyHt3-vhorb2RVJF_aAUbIqEo3Z-12bFYnmY2DakVz6KJus" },
    { name: "Emraan Hashmi", imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS75zyMhrQnfAEs92_8edx84oqZG2Votw-BXUQCXls3p12wjm_0" },
    { name: "Sriya Reddy", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Sriya_Reddy.jpg" },
    { name: "Arjun Das", imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHYnLjOm5Uv-1S5HbyOB31bi0u9NUpnuP0NGzyjHVXeebvwX7G" },
  ];
  res.json(team);
});

app.get("/GameChangerMovieCast", (req, res) => {
  let team2 = [
    { name: "Ram Charan", imageUrl: "https://cdn.gulte.com/wp-content/uploads/2023/03/Game-Changer.jpg" },
    { name: "Kiara Advani", imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiRKpRTE9lhFL_uQwS7ifplDJZMFR0CH5HlPKJwhsH6LMY_AzP" },
    { name: "Anjali", imageUrl: "https://static.tnn.in/thumb/msid-109011263,thumbsize-1296793,width-1280,height-720,resizemode-75/109011263.jpg" },
    { name: "Jaya Ram", imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMn0oOUuMmgBKSAAbCpWpuER7_lKBtaozwShxzaFHRTVaK7EyK" },
    { name: "Naveen Chandra", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYJgFjB9CWrRfvV96PaBc7oS8W9a-normru5cInwXUCZAP-vd" },
  ];
  res.json(team2);
});

app.listen(9441, () => {
  console.log("Ready To Use This Port Number");
});
