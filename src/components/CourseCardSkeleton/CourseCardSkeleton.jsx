import Skeleton from 'react-loading-skeleton';
import "./CourseCardSkeleton.css"


const CourseCardSkeleton = () => {
    return (
        // دقت کن: اینجا کلاس‌های سایزدهی بوت‌استرپ را نمی‌گذاریم
        // چون این کامپوننت قرار است داخل Col قرار بگیرد
        <div className="skeletion-course card h-100 border-0 shadow-sm">
            {/* اسکلتِ عکس با aspect-ratio */}
            <div style={{ height: "100%", width: '100%' }}>
                <Skeleton className='image' height={170} width="100%" />
            </div>
            
            <div className="card-body">
                {/* اسکلت متن */}
                <Skeleton height={25} width="150px" className="mb-2 title" />
                <Skeleton height={15} width="100%" className=" info"/>
                <Skeleton height={15} width="20%" className="d-sm-none d-md-block" />
                <Skeleton height={30} width="80px"  />
            </div>
        </div>
    );
};

export default CourseCardSkeleton