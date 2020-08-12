const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    proffyValue = {
        name: "Guilherme Leme",
        avatar: "https://avatars0.githubusercontent.com/u/63215075?s=400&u=8c7fbda1dc77214b3602383c0454a82b5d44188d&v=4",
        whatsapp: "41995017907",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam animi aperiam voluptas accusantium voluptate architecto, consectetur quas tempora cumque iure praesentium voluptatem? Ad veritatis quidem harum dolores sit eaque porro.",        
    }

    classValue = {
        subject: "Química",
        cost: "60",
    }

    classScheduleValues = [
        {
            weekday: 6,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

})



