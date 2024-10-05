let leadres = [{
    name: "Narendra Modi",
    age: 67,
    party: "BJP",
    designation: "PM",
    Vipstatus: true
}, {
    name: "Rahul Gandhi",
    age: 52,
    party: "INC",
    designation: "LOP",
    Vipstatus: true
}, {
    name: "Raosaheb Danve",
    age: 56,
    party: "BJP",
    designation: "Mp-frmr",
    Vipstatus: false
}]



const VIPLeaders = leadres.filter((l) => {
    if (l.Vipstatus == true) {
        return l;
    }
})

VIPLeaders.forEach((V) => {
    switch (V.designation) {
        case "PM":
            console.log("Z++", V.name);
            break;
        case "LOP":
            console.log("Z+", V.name);
            break;
        default:
            console.log("Not an VIP");



    }
})