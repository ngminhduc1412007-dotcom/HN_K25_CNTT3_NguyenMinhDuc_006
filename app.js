let athletes = [
    { athleteCode: "ATH-001", fullName: "Lâm Văn Hải",
    sport: "Bóng Đá",
    age: 21, jerseyNumber: 10 },
    { athleteCode: "ATH-002", fullName: "Ta Minh Thư",
    sport: "Bóng Chuyên",
    age: 19, jerseyNumber: 7 },
    { athleteCode: "ATH-003", fullName: "Đinh Công Phát",
    sport: "Bóng Đá",
    age: 24, jerseyNumber: 9 }
];

function validateAthleteCode(code){
    if (code === "") {
        return "Ma van dong vien khong duoc de trong!";
    }

    if (code < 6) {
        return "Ma van dong vien phai co toi thieu 6 ky tu!";
    }

    if (!code.startsWith("ATH-")) {
        return "Ma phai bat dau voi ATH- !";
    }

    if (code.includes(" ")) {
        return "Ma khong duoc chua khoang trang!";
    }

    return "";
};

function findAthleteIndex(code) {
    let index = -1;
    for (let i = 0; i < athletes.length; i++){
        if (athletes[i].athleteCode === code){
            index = i;
        }
    }
    return index;
};

function normalizeText(rawText) {
    let text = prompt(rawText).trim();
    text = text[0].toUpperCase().includes(" ") + text[1].toUpperCase.includes("") + text[2].toUpperCase.includes("");
    return text;
};

// function inputIntergerInRange(message, min, max) {
    
// };

function displayAthlete(list) {
    if (list.length === 0) {
        console.log("Danh sach trong!");
    } else {
        for (let i = 0; i < list.length; i++) {
            console.log(`${i + 1}. ${list[i].athleteCode} - ${list[i].fullName} - ${list[i].sport}`);
            console.log(`Tuoi: ${list[i].age} | So ao: ${list[i].jerseyNumber}`);
        }
    }
}

function addAthletes() {
    let athleteCode = prompt("Nhap ma van dong vien:").trim().toUpperCase();
    let error = validateAthleteCode(athleteCode);
    if (error){
        console.log(error);
    } else {
        let fullName = prompt("Nhap ten van dong vien:");
        let sport = prompt("Nhap mon thi dau:");
        let age = prompt("Nhap tuoi:");
        let jerseyNumber = prompt("Nhap so ao:");

        let newAthlete = {
            athleteCode: athleteCode,
            fullName: fullName,
            sport: sport,
            age: age,
            jerseyNumber: jerseyNumber
        }

        athletes.push(newAthlete);
        console.log("Ma van dong vien: " + athleteCode);
        console.log("Ten van dong vien: " + fullName);
        console.log("Bo mon thi dau: " + sport);
        console.log("Tuoi: " + age);
        console.log("So ao: " + jerseyNumber);
    }
};

function updateAthlete() {
    let findAthlete = prompt("Nhap ma van dong vien can cap nhat:").trim().toUpperCase;
    let index = findAthleteIndex(findAthlete);
    let newAge = prompt("Nhap tuoi moi:");
    let newJerseyNumber = prompt("Nhap so ao moi:");

    athletes[index].age = newAge;
    athletes[index].jerseyNumber = newJerseyNumber;

    console.log("Thong tin sau khi cap nhat");
    console.log(`Tuoi truoc khi thay doi: ${athletes[index].age}`);
    console.log(`Tuoi sau khi thay doi: ${newAge}`);
    console.log(`So ao truoc khi thay doi: ${athletes[index].jerseyNumber}`);
    console.log(`So ao sau khi thay doi: ${newJerseyNumber}`);    
};

function deleteAthlete(){
    let findAthlete = prompt("Nhap ma van dong vien can xoa:").trim().toUpperCase();
    let index = findAthlete(findAthlete)
    let confirm = prompt("Ban co chac muon xoa van dong vien nay (Y/N)?").trim().toUpperCase();
    if (confirm === "Y") {
        athletes.unshift(index);
        console.log("Da xoa van dong vien nay!");
    } else {
        console.log("Da huy thao tac xoa!");
        return index;
    }
};

function searchAthlete() {
    let keyword = prompt("Nhap van dong vien muon tim kiem: ").trim().toLowerCase();
    let searchList = [];
    for (let i = 0; i < athletes.length; i++){
        if (athletes[i].sport.toLowerCase().includes(keyword)){
            searchList.push(athletes[i])
        }
    }
    if (searchList.length === 0){
        console.log("Khong tim thay!");
    } else {
        displayReservations(searchList);
    }
};

function main(){
    let choice;
    do {
        choice = Number(prompt(`====================================================
HỆ THỐNG QUẢN LÝ VẬN ĐỘNG VIÊN CLB THẾ THAO VICTORY
====================================================
1. Hiển thị danh sách vận động viên
2. Thêm vận động viên mới
3. Cập nhật thông tin vận động viên
4. Xóa vận động viên
5. Tìm kiếm vận động viên theo môn thi đấu
0. Thoát chương trình
====================================================
Vui lòng nhập lựa chọn của bạn (0 - 5):`))

            switch(choice){
                case 1:
                    displayAthlete(athletes);
                    break;
                
                case 2:
                    addAthletes();
                    break;

                case 3:
                    updateAthlete();
                    break;

                case 4:
                    deleteAthlete();
                    break;

                case 5:
                    searchAthlete();
                    break;

                case 0:
                    console.log("Thoat chuong trinh!");
                    break;
                
                default:
                    console.log("Lua chon khong hop le vui long chon lai!");
                    break;
            }
    } while (choice !== 0);
};

main();