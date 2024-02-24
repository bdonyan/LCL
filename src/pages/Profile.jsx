import React from 'react';

const Profile = ({ profileData }) => {
    return (
        <div className='w-full py-10 px-4 bg-gradient-to-b from-gray-900 to-black text-white'>
            <div className='max-w-3xl mx-auto'>
                <h2 className='text-5xl font-bold text-center mb-8 text-yellow-400'>Profile Portal</h2>
                {profileData.map(profile => (
                    <div key={profile.id} className='border border-white rounded-lg p-6 mb-6 text-center shadow-lg hover:shadow-xl transition duration-300'>
                        <p className='text-2xl font-semibold'>ID: {profile.id}</p>
                        <p className='mt-4 text-xl'>Jobs Finished: {profile.jobsFinished}</p>
                        <p className='mt-4 text-xl'>Profile Earnings: ${profile.earnings}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
