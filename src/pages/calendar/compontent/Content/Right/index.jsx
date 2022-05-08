import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
const colours = [
  "#e54d42",
  "#f37b1d",
  "#fbbd08",
  "#8dc63f",
  "#39b54a",
  "#1cbbb4",
  "#0081ff",
  "#6739b6",
  "#9c26b0",
  "#e03997",
  "#a5673f",
  "#8799a3"
];
const course2 = [
  {
    campus: "长安校区东区",
    className: "数据库原理及应用A-0001",
    courseID: "JS100491",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "1-2节",
    courseTitle: "数据库原理及应用A",
    courseWeek: "1-18周",
    credit: 4,
    hoursComposition: "讲课:44,实践:20",
    teacher: "尚小林",
    totalHours: 72,
    week: 1,
    weeklyHours: 4
  },
  {
    campus: "长安校区东区",
    className: "大学英语CIII-0037",
    courseID: "6CC2A00338443864E055000000000001",
    courseLogID: 2,
    courseRoom: "FZ211",
    courseSection: "3-4节",
    courseTitle: "大学英语CIII",
    courseWeek: "1-2周",
    credit: 2,
    hoursComposition: "讲课:32",
    teacher: "郑洁玲",
    totalHours: 32,
    week: 1,
    weeklyHours: 2
  },
  {
    campus: "长安校区东区",
    className: "大学英语CIII-0037",
    courseID: "6CC2A00338443864E055000000000001",
    courseLogID: 2,
    courseRoom: "FZ233",
    courseSection: "3-4节",
    courseTitle: "大学英语CIII",
    courseWeek: "3-18周",
    credit: 2,
    hoursComposition: "讲课:32",
    teacher: "郑洁玲",
    totalHours: 32,
    week: 1,
    weeklyHours: 2
  },
  {
    campus: "长安校区东区",
    className: "概率论与数理统计B-0013",
    courseID: "LX113502",
    courseLogID: 2,
    courseRoom: "FF203",
    courseSection: "5-8节",
    courseTitle: "概率论与数理统计B",
    courseWeek: "1-18周",
    credit: 3,
    hoursComposition: "讲课:48",
    teacher: "仝秋娟",
    totalHours: 54,
    week: 1,
    weeklyHours: 3
  },
  {
    campus: "长安校区东区",
    className: "数据结构B-0002",
    courseID: "86DB3D8E3BEC46FDE055000000000001",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "1-2节",
    courseTitle: "数据结构B",
    courseWeek: "1-18周",
    credit: 4,
    hoursComposition: "讲课:44,实验:20,网络:16",
    teacher: "曾艳",
    totalHours: 72,
    week: 2,
    weeklyHours: 4
  },
  {
    campus: "长安校区东区",
    className: "毛泽东思想和中国特色社会主义理论体系概论-0016",
    courseID: "6D3A671B9F266271E055000000000001",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "3-4节",
    courseTitle: "毛泽东思想和中国特色社会主义理论体系概论",
    courseWeek: "1-17周(单)",
    credit: 5,
    hoursComposition: "讲课:48,实验:32",
    teacher: "陶红霞",
    totalHours: 54,
    week: 2,
    weeklyHours: 3
  },
  {
    campus: "长安校区东区",
    className: "Python语言程序设计-0001",
    courseID: "6CC2D8AA8B3D39B6E055000000000001",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "5-6节",
    courseTitle: "Python语言程序设计",
    courseWeek: "1-18周",
    credit: 3,
    hoursComposition: "讲课:36,实验:12",
    teacher: "孟伟君",
    totalHours: 54,
    week: 2,
    weeklyHours: 3
  },
  {
    campus: "长安校区东区",
    className: "数据库原理及应用A-0001",
    courseID: "JS100491",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "1-2节",
    courseTitle: "数据库原理及应用A",
    courseWeek: "1-18周",
    credit: 4,
    hoursComposition: "讲课:44,实践:20",
    teacher: "尚小林",
    totalHours: 72,
    week: 3,
    weeklyHours: 4
  },
  {
    campus: "长安校区东区",
    className: "大学物理B-0010",
    courseID: "LX140102",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "3-4节",
    courseTitle: "大学物理B",
    courseWeek: "1-18周",
    credit: 4,
    hoursComposition: "讲课:64",
    teacher: "张黄莉",
    totalHours: 72,
    week: 3,
    weeklyHours: 4
  },
  {
    campus: "长安校区东区",
    className: "概率论与数理统计B-0013",
    courseID: "LX113502",
    courseLogID: 2,
    courseRoom: "FF203",
    courseSection: "5-6节",
    courseTitle: "概率论与数理统计B",
    courseWeek: "1-17周(单)",
    credit: 3,
    hoursComposition: "讲课:48",
    teacher: "仝秋娟",
    totalHours: 54,
    week: 3,
    weeklyHours: 3
  },
  {
    campus: "长安校区东区",
    className: "数据结构B-0002",
    courseID: "86DB3D8E3BEC46FDE055000000000001",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "1-2节",
    courseTitle: "数据结构B",
    courseWeek: "1-18周",
    credit: 4,
    hoursComposition: "讲课:44,实验:20,网络:16",
    teacher: "曾艳",
    totalHours: 72,
    week: 4,
    weeklyHours: 4
  },
  {
    campus: "长安校区西区",
    className: "大学体育Ⅲ模块-0009",
    courseID: "TY100030",
    courseLogID: 2,
    courseRoom: "未排地点",
    courseSection: "3-4节",
    courseTitle: "大学体育Ⅲ模块",
    courseWeek: "1-18周",
    credit: 1,
    hoursComposition: "讲课:32",
    teacher: "项丽娟",
    totalHours: 36,
    week: 4,
    weeklyHours: 2
  },
  {
    campus: "长安校区东区",
    className: "Python语言程序设计-0001",
    courseID: "6CC2D8AA8B3D39B6E055000000000001",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "5-7节",
    courseTitle: "Python语言程序设计",
    courseWeek: "2-18周(双)",
    credit: 3,
    hoursComposition: "讲课:36,实验:12",
    teacher: "孟伟君",
    totalHours: 54,
    week: 4,
    weeklyHours: 3
  },
  {
    campus: "长安校区东区",
    className: "大学物理B-0010",
    courseID: "LX140102",
    courseLogID: 2,
    courseRoom: "FF207",
    courseSection: "3-4节",
    courseTitle: "大学物理B",
    courseWeek: "1-18周",
    credit: 4,
    hoursComposition: "讲课:64",
    teacher: "张黄莉",
    totalHours: 72,
    week: 5,
    weeklyHours: 4
  },
  {
    campus: "长安校区东区",
    className: "毛泽东思想和中国特色社会主义理论体系概论-0016",
    courseID: "6D3A671B9F266271E055000000000001",
    courseLogID: 2,
    courseRoom: "FZ211",
    courseSection: "5-6节",
    courseTitle: "毛泽东思想和中国特色社会主义理论体系概论",
    courseWeek: "1-18周",
    credit: 5,
    hoursComposition: "讲课:48,实验:32",
    teacher: "陶红霞",
    totalHours: 54,
    week: 5,
    weeklyHours: 3
  }
];
function Item(props) {
  // console.log(props.course);
  // console.log(props);
  // console.log(props.classC);
  const { course, bgc, classC, classN, classNin } = props;
  const checkCourse = () => {
    console.log(course);
  };
  return (
    <View className={classC} onClick={checkCourse}>
      <View className={classN} style={{ backgroundColor: bgc }}>
        <View className={classNin}>{course}</View>
      </View>
      {/* <Text className="course-topbox" style={{ backgroundColor: bgc }}>
        {course}
      </Text> */}
    </View>
  );
}

export default function(props) {
  const courseDate = props.courseDate;
  const weekly = props.thisWeek;
  console.log(courseDate);
  console.log(course2);
  function trimTime() {
    let weekCourse = [];
    let tureCourse = [];
    // let lastCourse = [];
    course2.map((item, index) => {
      if (weekly % 2 == 1) {
        if (item.courseWeek.search("双") != -1) {
        } else {
          weekCourse.push(item);
        }
      } else {
        if (item.courseWeek.search("单") != -1) {
        } else {
          weekCourse.push(item);
        }
      }
    });
    console.log(weekCourse);
    weekCourse.map((item, index) => {
      let num = item.courseWeek.replace(/[^0-9]/gi, "");
      let section = item.courseSection.replace(/[^0-9]/gi, "");
      // console.log(item);
      // console.log(num);
      // console.log(section);
      if (num.length <= 3) {
        item.courseWeek = [num.slice(0, 1), num.slice(1)];
        console.log(item.courseWeek);
        if (section.slice(1) == section.slice(0, 1) + 1) {
        } else {
          item.courseSection = [section.slice(0, 1), section.slice(1)];
          for (
            var i = parseInt(section.slice(0, 1)) + 1;
            i < section.slice(1);
            i++
          ) {
            item.courseSection.push(i + "");
          }
        }
      } else {
        item.courseWeek = [num.slice(0, 1), num.slice(1)];
        if (section.slice(1) == section.slice(0, 1) + 1) {
        } else {
          for (var i = section.slice(0, 1); i <= section.slice(1); i++) {
            item.courseSection.push("i");
          }
        }
      }
    });
    console.log(weekCourse);
    weekCourse.map((item, index) => {
      if (
        weekly >= parseInt(item.courseWeek[0]) &&
        weekly <= parseInt(item.courseWeek[1])
      ) {
        tureCourse.push(item);
      }
    });
    tureCourse.map((item, index) => {
      // console.log(item);
      item.weekyHours = [];
      item.courseSection.map((item3, index) => {
        item.weekyHours.push(parseInt(item.week + item3));
      });
    });
    return tureCourse;
  }
  let courses = trimTime();
  console.log(courses);
  function DataChangeCourse(courses) {
    var arr = new Array();
    var allCourse = new Array();
    var selectCourse = new Array();
    for (var i = 1; i <= 10; i++) {
      arr[i] = new Array(i);
      for (var j = 1; j <= 7; j++) {
        arr[i][j] = "";
      }
    }
    // console.log(arr);
    for (var m in courses) {
      // console.log(courses[m]);
      let data = courses[m].weekyHours;
      let seltimearr = new Array();
      let selweekarr = new Array();
      selectCourse.push(courses[m].className);
      // console.log(data);
      for (var n in data) {
        // console.log(data);
        let timedata = data[n] % 10;
        seltimearr.push(timedata);
        let weekdata = parseInt(data[n] / 10);
        console.log(timedata);
        // console.log(weekdata);
        // console.log(timedata == 1);
        // console.log(timedata % 2 == 1);
        // console.log(timedata % 2 == 0);
        if (data.length == 2) {
          if (timedata % 2 == 1) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 1;
          } else if (timedata % 2 == 0) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 2;
          } else {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 0;
          }
        } else if (data.length == 4) {
          if (timedata % 4 == 1) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 1;
          } else if (timedata % 4 == 0) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 2;
          } else if (timedata % 4 == 2) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 0;
          } else {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 3;
          }
        } else {
          if (timedata % 2 == 1) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 1;
          } else if (timedata % 2 == 0) {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 2;
          } else {
            arr[timedata][weekdata] = JSON.parse(JSON.stringify(courses[m]));
            arr[timedata][weekdata].position = 0;
          }
        }
        // console.log(arr[timedata][weekdata]);
        selweekarr.push(weekdata);
        // console.log(seltimearr);
        // console.log(selweekarr);
      }
      for (var i = 0; i < selweekarr.length; i++) {
        if ((selweekarr[i] = selweekarr[i + 1])) {
        }
      }
    }
    for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 7; j++) {
        allCourse.push(arr[i][j]);
      }
    }
    // console.log(allCourse);
    // console.log(selectCourse);
    function fun(arr) {
      let s1 = new Set(arr);
      return [...s1];
    }
    selectCourse = fun(selectCourse);
    console.log(selectCourse);
    return {
      allCourse: allCourse,
      selectCourse: selectCourse
    };
  }
  const obj = DataChangeCourse(courses);
  console.log(obj);
  let course = "";
  let classC = "";
  let classN = "";
  let classNin = "";
  let bgc = "none";
  return (
    <View className="right">
      {obj.allCourse.map(item => {
        console.log(item);
        if (item == "") {
          bgc = "none";
          course = "";
          classC = "coursebox-null";
          classN = "course-nullbox";
          classNin = "course-nullinbox";
        } else {
          for (var selc in obj.selectCourse) {
            if (item.className == obj.selectCourse[selc]) {
              bgc = colours[selc];
              // console.log(bgc);
            }
          }
          if (item.weekyHours.length == 2) {
            if (item.position == 0) {
              course = "";
              classC = "coursebox-center";
              classN = "course-centerbox";
              classNin = "course-centerinbox";
            } else if (item.position == 1) {
              let str = item.className;
              course = str.substr(0, str.indexOf("-"));
              classC = "coursebox-top";
              classN = "course-topbox";
              classNin = "course-topinbox";
            } else if (item.position == 2) {
              course = item.campus + item.courseRoom;
              classC = "coursebox-bottom";
              classN = "course-bottombox";
              classNin = "course-bottominbox";
            }
          } else {
            if (item.position == 0) {
              course = item.campus + item.courseRoom;
              classC = "coursebox-center";
              classN = "course-centerbox";
              classNin = "course-centerinbox";
            } else if (item.position == 1) {
              let str = item.className;
              course = str.substr(0, str.indexOf("-"));
              classC = "coursebox-top";
              classN = "course-topbox";
              classNin = "course-topinbox";
            } else if (item.position == 2) {
              course = "";
              classC = "coursebox-bottom";
              classN = "course-bottombox";
              classNin = "course-bottominbox";
            } else if (item.position == 3) {
              course = "";
              classC = "coursebox-center";
              classN = "course-centerbox";
              classNin = "course-centerinbox";
            }
          }
        }
        return (
          <Item
            course={course}
            bgc={bgc}
            classC={classC}
            classN={classN}
            classNin={classNin}
          />
        );
      })}
    </View>
  );
}
