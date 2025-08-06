(() =>{
    //start coding!
    const SECOND= 1000;
    const MINUTE = SECOND*60;
    const HOUR = MINUTE*60;
    const DAY = HOUR*24;

    function setElementInnerText(id,text){ //functionที่ช่วยให้เราแค่ใส่ค่า id กับ text เข้าไปแล้วเขาจะดึงค่ามาแสดงให้อัตโนมัติ
        const element = document.getElementById(id);
        element.innerText= text;
    }
    
    function countDown(){
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2025 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

 //เวลาที่เหลือตั้งแต่วันนี้ไปจนปีใหม่ หารด้วยวันทั้งหมดใน1ปี
        setElementInnerText('days',Math.floor(unixTimeLeft/DAY));
        //const hoursElem = document.getElementById('hours');
        //hoursElem.innerText=Math.floor(unixTimeLeft % DAY / HOUR);
        setElementInnerText('hours',Math.floor(unixTimeLeft% DAY / HOUR));
        setElementInnerText('minutes',Math.floor(unixTimeLeft% HOUR / MINUTE));
        setElementInnerText('seconds',Math.floor(unixTimeLeft% MINUTE / SECOND));
    }
function run() {
        countDown();
        setInterval(countDown,SECOND); //เป็นโค้ดที่เราใช้เรียกให้อะไรบางอย่างทำงานทุกๆกี่วิ นาที ชั่วโมง แต่เรา,second ซึ่งเราระบุ secondด้านบนว่า 1000
    }

    run(); // เรียกใช้ฟังก์ชัน run() เพื่อเริ่มการทำงาน
})();