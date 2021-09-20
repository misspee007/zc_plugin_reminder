import React from 'react'

import { SearchIcon, FilterIcon } from '@heroicons/react/outline'

import Sortbar from './components/sortbar'
import Searchbar from './components/searchbar'
import CreateNewDeadlineButton from './components/button'

const Nav = () => {
	return (
		<nav className="dtw-space-y-1 md:dtw-space-y-0">
			<div className="dtw-flex dtw-flex-col lg:dtw-flex-row dtw-justify-between dtw-items-center">
				<div className="dtw-flex dtw-justify-between dtw-items-start dtw-w-full lg:dtw-w-auto">
					<div className="lg:dtw-hidden">
						<CreateNewDeadlineButton />
					</div>

					<div className="dtw-flex">
						<SearchIcon className="lg:dtw-hidden dtw-text-gray-400 dtw-w-3.5 dtw-mr-3" />
						<FilterIcon className=" lg:dtw-hidden dtw-text-gray-400 dtw-w-3.5" />
					</div>
				</div>

				<div className="dtw-flex dtw-justify-between ">
					<div className="dtw-hidden lg:dtw-block">
						<CreateNewDeadlineButton />
					</div>
					<div className=" dtw-flex ">
						<div className="dtw-hidden lg:dtw-block dtw-px-4">
							<Searchbar />
						</div>

						<div className="dtw-hidden lg:dtw-block ">
							<Sortbar />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav
