import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <div className="flex items-center me-4">
                    <input checked id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="red-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
                </div>
                <div className="flex items-center me-4">
                    <input checked id="green-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
                </div>
                <div className="flex items-center me-4">
                    <input checked id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="purple-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</label>
                </div>
                <div className="flex items-center me-4">
                    <input checked id="teal-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="teal-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</label>
                </div>
                <div className="flex items-center me-4">
                    <input checked id="yellow-checkbox" type="checkbox" value="" className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="yellow-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
                </div>
                <div className="flex items-center me-4">
                    <input checked id="orange-checkbox" type="checkbox" value="" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="orange-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
                </div>
            </div>
        );
    }
}

export default Welcome;
