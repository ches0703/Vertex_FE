import { faker } from '@faker-js/faker';

import readXlsxFile from 'read-excel-file'

import SignUpAPI from "../Accoount/SignUpAPI";

const createDummyUser = async () => {
    // const data = {
    //     email: email,
    //     name: name,
    //     password: pwd,
    //     birthday: birthday,
    //     gender: gender
    //   }

    const m = 100
    for (let i = 0; i < m; i++) {
        const email = faker.internet.email();
        const name = faker.person.fullName();
        const pwd = faker.internet.password();
        const birthday = faker.date.birthdate().toString();
        const gender = faker.person.sex()

        const data = {
            email: email,
            name: name,
            password: pwd,
            birthday: birthday,
            gender: gender,
        };

        // console.log(data);
        const result = await SignUpAPI(data);
        if (result) {
            console.log("Sign up Success")
        } else {
            console.log("Sign up Fail")
        }
    }
}

const createDummyVideo = async () => {
    const video_csv = await fetch('./결측치제거데이터.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob))
        .then((rows) => {
            // console.log(rows)
            // const m = 10;
            // rows.forEach((row) => {
            //     console.log(row)
            // })
            return rows.slice(1)
        })

    const user_csv = await fetch('./user.xlsx')
        .then(response => response.blob())
        .then(blob => readXlsxFile(blob))
        .then((rows) => {
            // console.log(rows)
            // const m = 10;
            // rows.forEach((row) => {
            //     console.log(row)
            // })
            return rows.slice(1)
        })

    const youtubeURL = 'https://www.youtube.com/watch?v=';
    const imgURL = 'https://img.youtube.com/vi/';
    // console.log(video_csv)
    // console.log(user_csv)

    const data = []
    let cnt = 1;
    let i = 0;
    video_csv.forEach((row) => {
        // id
        const videoUrl = youtubeURL + row[0]

        // title
        const vidoeTitle = row[1]

        // user_email
        const userEmail = user_csv[i][0]

        // name
        const userName = user_csv[i][3]

        // extension
        const videoExtension = 'mp4'
        const thumbnailExtension = 'jpg'

        // thumbnail url
        // const thumbnailURL = imgURL + row[0] + '/0.jpg';

        data.push([videoUrl, vidoeTitle, userEmail, userName, videoExtension, thumbnailExtension])

        if (cnt % 443 == 0) {
            i++;
            // console.log(i)
        }
        cnt++;
    })

    console.log(data)
}

export {
    createDummyUser,
    createDummyVideo
}