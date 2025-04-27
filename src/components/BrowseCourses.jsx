import { useState } from "react";
import "../assets/styles/BrowseCourses.css";
import { categories, courseList } from "@/data/Courses";
import { RarrowSvg, TimerSvg } from "@/assets";
function BrowseCourses() {
  const [category, setCategory] = useState("");
  return (
    <>
      <div className="browse-courses">
        <div className="browse-course-heading">Browse more Courses</div>
        <div className="browse-course-nav">
          <div className="browse-course-nav-inner">
            {categories.map((item) => (
              <div
                className={`bcn-category ${
                  category == item.type && "bcn-category-active"
                }`}
                key={item.type}
                onClick={() => setCategory(item.type)}
              >
                {item.name}(
                {
                  courseList.filter(
                    (course) => course.type == item.type || item.type == ""
                  ).length
                }
                )
              </div>
            ))}
          </div>
        </div>
        <div className="browse-course-courses">
          {courseList &&
            courseList
              .filter((course) => course.type == category || category == "")
              .map((course, idx) => (
                <div className="bcc-course-card" key={`${course.slug} ${idx}`}>
                  <div className="bcc-course-card-no">{idx + 1}</div>
                  <div className="bcc-course-card-top">
                    <img
                      src={course.cimg}
                      alt={course.text}
                      width={42}
                      height={42}
                      className="bcc-course-card-img"
                    />
                    <div className="bcc-course-card-name">{course.text}</div>
                  </div>
                  <div className="bcc-course-card-duration">
                    <TimerSvg />
                    <span>Duration: 38h 54m</span>
                  </div>
                  <a
                    href={`https://tutedude.com/category/${course.slug}`}
                    target="_blank"
                    className="bcc-course-card-curriculum"
                  >
                    <span>Curriculum</span>
                    <RarrowSvg color="#B73BBE" width={20} height={20} />
                  </a>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default BrowseCourses;
