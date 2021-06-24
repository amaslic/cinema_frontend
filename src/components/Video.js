import React from 'react'

export const Video = ( params ) => {
	const { videoId, videoName } = { ...params };
	return (
		<div className="flex m-auto pt-16 justify-center">
			<iframe className="w-full md:h-96 h-56 md:w-2/5" src={`https://www.youtube.com/embed/${videoId}`} title={videoName} 
				frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">	
			</iframe>
		</div>
	)
}
