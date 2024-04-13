import React from "react";

export default function TextArea({ defaultValue }) {
    return (
        <div>
            {/* <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
                Add your comment
            </label> */}
            <div className="mt-2">
                <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-gray-300 shadow-sm text-black"
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}
