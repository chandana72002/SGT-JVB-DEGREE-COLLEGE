import campusBuilding from '../assets/images/os-campus-building.jpg';
import campusCourtyard from '../assets/images/os-campus-courtyard.jpg';
import careerCounseling from '../assets/images/os-career-counseling.jpg';
import chemistryLab from '../assets/images/os-chemistry-lab.jpg';
import classroom from '../assets/images/os-classroom.jpg';
import computerLab from '../assets/images/os-computer-lab.jpg';
import graduation from '../assets/images/os-graduation.jpg';
import instructorClassroom from '../assets/images/os-instructor-classroom.jpg';
import library from '../assets/images/os-library.jpg';
import scienceLab from '../assets/images/os-science-lab.jpg';
import seminarRoom from '../assets/images/os-seminar-room.jpg';
import sports from '../assets/images/os-sports.jpg';
import studentActivityCenter from '../assets/images/os-student-activity-center.jpg';

export const openSourceImages = {
  campusCourtyard: {
    src: campusCourtyard,
    alt: 'Students in a campus courtyard',
    source: 'https://commons.wikimedia.org/wiki/File:Students_0006.JPG',
    license: 'Public domain',
  },
  studentActivityCenter: {
    src: studentActivityCenter,
    alt: 'Student activity center front garden on a university campus',
    source:
      'https://commons.wikimedia.org/wiki/File:2019.03.13_Student_Activity_Center_front_garden_(NYCU_Guangfu_Campus).jpg',
    license: 'CC0',
  },
  campusBuilding: {
    src: campusBuilding,
    alt: 'University campus building exterior',
    source: 'https://commons.wikimedia.org/wiki/File:University_Library_-_UIUC_-_DSC09137.JPG',
    license: 'Public domain',
  },
  classroom: {
    src: classroom,
    alt: 'Students seated in a college classroom',
    source:
      'https://commons.wikimedia.org/wiki/File:College_classroom_-_DPLA_-_d95b0f32bb9671052fce6fc8421434bd.jpg',
    license: 'Public domain',
  },
  library: {
    src: library,
    alt: 'Library interior with reading tables and shelves',
    source: 'https://commons.wikimedia.org/wiki/File:Interior_Library_LCCN2016821091.jpg',
    license: 'Public domain',
  },
  computerLab: {
    src: computerLab,
    alt: 'Computer lab with desktop workstations',
    source: 'https://commons.wikimedia.org/wiki/File:Shimer_College_computer_lab.jpg',
    license: 'Public domain',
  },
  classroomTechnology: {
    src: instructorClassroom,
    alt: 'Instructor teaching students in a classroom',
    source: 'https://commons.wikimedia.org/wiki/File:Instructor_speaking_to_students_in_classroom.jpg',
    license: 'Public domain',
  },
  biologyLab: {
    src: scienceLab,
    alt: 'Student working in a biology lab',
    source: 'https://commons.wikimedia.org/wiki/File:Biology_lab.jpg',
    license: 'CC0',
  },
  chemistryLab: {
    src: chemistryLab,
    alt: 'Chemistry laboratory workspace',
    source: 'https://commons.wikimedia.org/wiki/File:Chemistry_lab_01.jpg',
    license: 'CC0',
  },
  seminarRoom: {
    src: seminarRoom,
    alt: 'Seminar room prepared for an academic discussion',
    source: 'https://commons.wikimedia.org/wiki/File:Seminar_Room.jpg',
    license: 'Public domain',
  },
  sportsClub: {
    src: sports,
    alt: 'University sports club facility',
    source: 'https://commons.wikimedia.org/wiki/File:University_sports_club.JPG',
    license: 'Public domain',
  },
  careerCounseling: {
    src: careerCounseling,
    alt: 'Students attending a career counseling session',
    source:
      'https://commons.wikimedia.org/wiki/File:Career_Counseling_-_DPLA_-_4905fe85902161439ff4951d4371a634.jpg',
    license: 'Public domain',
  },
  commencement: {
    src: graduation,
    alt: 'Students in graduation gowns crossing a campus walkway',
    source: 'https://commons.wikimedia.org/wiki/File:Commencement_(UHPCSNP_11996).jpg',
    license: 'Public domain',
  },
  facultyGuidance: {
    src: instructorClassroom,
    alt: 'Instructor guiding students during a classroom session',
    source: 'https://commons.wikimedia.org/wiki/File:Instructor_speaking_to_students_in_classroom.jpg',
    license: 'Public domain',
  },
};

export const pageHeaderImages = {
  'About the Institution': openSourceImages.studentActivityCenter,
  'Vision, Mission, and Core Values': openSourceImages.campusCourtyard,
  Departments: openSourceImages.classroom,
  Courses: openSourceImages.biologyLab,
  Faculty: openSourceImages.facultyGuidance,
  Admissions: openSourceImages.campusBuilding,
  Facilities: openSourceImages.library,
  Events: openSourceImages.seminarRoom,
  Gallery: openSourceImages.campusCourtyard,
  Placements: openSourceImages.careerCounseling,
  Achievements: openSourceImages.commencement,
  Testimonials: openSourceImages.campusCourtyard,
  'Anti-Ragging': openSourceImages.seminarRoom,
  Contact: openSourceImages.campusBuilding,
};

export const galleryImages = [
  { id: 1, title: 'Campus Courtyard', image: openSourceImages.campusCourtyard },
  { id: 2, title: 'Student Activity Center', image: openSourceImages.studentActivityCenter },
  { id: 3, title: 'Classroom Learning', image: openSourceImages.classroom },
  { id: 4, title: 'Library Resources', image: openSourceImages.library },
  { id: 5, title: 'Computer Lab', image: openSourceImages.computerLab },
  { id: 6, title: 'Science Lab', image: openSourceImages.biologyLab },
  { id: 7, title: 'Seminar Programs', image: openSourceImages.seminarRoom },
  { id: 8, title: 'Sports Facilities', image: openSourceImages.sportsClub },
  { id: 9, title: 'Career Guidance', image: openSourceImages.careerCounseling },
];
