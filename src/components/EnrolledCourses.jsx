import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/styles/EnrolledCourses.css";
import {
  AssignmentSvg,
  CalendarSvg,
  ClockLastSvg,
  DownloadSvg,
  photoshop,
  PlaySvg,
  SwiperNextSvg,
  SwiperPrevSvg,
} from "@/assets";

const tempCourses = [
  {
    courseName: "Photoshop",
    enrolledDate: "20th Oct 2024",
    lastWatched: "Chapter 1",
    courseImage: photoshop,
    progress: 20,
    totalAssignments: 12,
    assignmentsDone: 1,
    id: 1,
  },
  {
    courseName: "Photoshop",
    enrolledDate: "20th Oct 2024",
    lastWatched: "Chapter 3",
    courseImage: photoshop,
    progress: 100,
    totalAssignments: 12,
    assignmentsDone: 12,
    id: 2,
  },
  {
    courseName: "Photoshop",
    enrolledDate: "20th Oct 2024",
    lastWatched: "Chapter 2",
    courseImage: photoshop,
    progress: 20,
    totalAssignments: 12,
    assignmentsDone: 1,
    id: 3,
  },
  {
    courseName: "Photoshop",
    enrolledDate: "20th Oct 2024",
    lastWatched: "Chapter 2",
    courseImage: photoshop,
    progress: 20,
    totalAssignments: 12,
    assignmentsDone: 1,
    id: 4,
  },
  {
    courseName: "Photoshop",
    enrolledDate: "20th Oct 2024",
    lastWatched: "Chapter 2",
    courseImage: photoshop,
    progress: 20,
    totalAssignments: 12,
    assignmentsDone: 1,
    id: 5,
  },
  {
    courseName: "Photoshop",
    enrolledDate: "20th Oct 2024",
    lastWatched: "Chapter 2",
    courseImage: photoshop,
    progress: 20,
    totalAssignments: 12,
    assignmentsDone: 1,
    id: 6,
  },
];

const EnrolledCourses = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="enrolled-courses">
        <div className="enrolled-courses-top">
          <div className="enrolled-course-heading">Enrolled Courses</div>
          <div className="enrolled-course-nav">
            <div onClick={() => swiperRef.current?.slidePrev()}>
              <SwiperPrevSvg />
            </div>
            <div onClick={() => swiperRef.current?.slideNext()}>
              <SwiperNextSvg />
            </div>
          </div>
        </div>
        <Swiper
          className="enrolled-courses-main"
          spaceBetween={8}
          slidesPerView={3}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {tempCourses.map((course) => (
            <SwiperSlide
              className="enrolled-course-card"
              key={`${course.id}-${course.courseName}`}
            >
              <div className="ecc-top">
                <img
                  src={course.courseImage}
                  alt={course.courseName}
                  width={48}
                  height={48}
                />
                <div className="ecc-top-detail-main">
                  <div className="ecc-top-detail-name">{course.courseName}</div>
                  <div className="ecc-top-detail-lastwatch">
                    <ClockLastSvg />
                    <span>{course.lastWatched}</span>
                  </div>
                </div>
              </div>
              <div className="ecc-middle">
                <div className="ecc-middle-row">
                  <CalendarSvg />
                  <span>Enrolled On {course.enrolledDate}</span>
                </div>
                <div className="ecc-middle-row">
                  <AssignmentSvg />
                  <span>
                    Assignment completed {course.assignmentsDone}/
                    {course.totalAssignments}
                  </span>
                </div>
                <div className="ecc-middle-progress">
                  <div className="eccm-progress-top">
                    <div className="eccm-progressbar">
                      <div
                        className="eccm-progressbar-filled"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="eccm-progress-no">{course.progress}%</div>
                  </div>
                  <div className="eccm-progress-text">Course Progress</div>
                </div>
              </div>
              <div className="ecc-bottom">
                {course.progress == 100 ? (
                  <>
                    <button className="eccb-resume-white eccb-button">
                      <span>Resume</span>
                      <PlaySvg color="#B73BBE" />
                    </button>
                    <button className="eccb-certificate eccb-button">
                      <span>Certificate</span>
                      <DownloadSvg />
                    </button>
                  </>
                ) : (
                  <button className="eccb-resume eccb-button">
                    <span>Resume</span>
                    <PlaySvg />
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default EnrolledCourses;
