const today = new Date();

const days = today.toDateString();

const getDays = (year, month)=>{

    return new Date(year, month,0).getDate();
}

const dayCount = getDays(2023,3);

console.log(dayCount);