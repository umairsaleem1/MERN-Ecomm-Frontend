import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const withPageInfo = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const [page, setPage] = useState(0);
        const router = useRouter();
        const { pageName, page: pageCount, search } = router.query;
        console.log(router.pathname);

        useEffect(() => {
            if (!pageCount) setPage(1);
            else setPage(Number(pageCount));
        }, [pageCount]);

        const appendSearchQuery = (value) => {
            if (router.pathname.endsWith("reviews")) {
                if (!value) {
                    router.push(`/admin/${pageName}/reviews`);
                } else {
                    router.push(`/admin/${pageName}/reviews?search=${value}`);
                }
            } else {
                if (!value) {
                    router.push(`/admin/${pageName}`);
                } else {
                    router.push(`/admin/${pageName}?search=${value}`);
                }
            }
        };

        return (
            <WrappedComponent
                {...props}
                page={page}
                setPage={setPage}
                router={router}
                pageName={pageName}
                search={search}
                pageCount={pageCount}
                appendSearchQuery={appendSearchQuery}
            />
        );
    };
    return EnhancedComponent;
};

export default withPageInfo;
