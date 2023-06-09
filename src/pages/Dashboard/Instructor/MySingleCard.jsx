import React from 'react';

const MySingleCard = ({product}) => {
    const  { classes, price, instructor, seats, image }  = product
    return (
        <tr className='mt-3'>
        <td className="p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
              <img className="rounded-full" src={image} width="30" height="20" alt="Alex Shatov" />
            </div>
            <div className="font-medium text-gray-800">{seats} student</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left">awesome course</div>
        </td>
        <td className="p-2">
          <div className="text-center"><button className="btn btn-xs bg-warning text-white">Update</button></div>
        </td>
        <td className="p-2">
          <div className="text-center"><button className="btn text-white btn-xs bg-success">Approved</button></div>
        </td>
      </tr>
    );
};

export default MySingleCard;