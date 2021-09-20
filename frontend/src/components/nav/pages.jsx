import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import UpcomingPage from '../../pages/Upcoming'
import OverduePage from '../../pages/Overdue'

const Pages = () => {
	return (
		<div className="">
			<Disclosure defaultOpen="true">
				{({ open }) => (
					<>
						<Disclosure.Button className="lg:dtw-border-b lg:dtw-pb-3 dtw-w-full dtw-py-2 lg:dtw-pt-0 dtw-inline-flex dtw-items-center ">
							<span className="dtw-text-gray-800 dtw-font-bold dtw-mr-1">
								Overdue
							</span>
							<ChevronUpIcon
								className={`${
									open ? 'dtw-transform dtw-rotate-180' : ''
								} dtw-w-4 dtw-h-4 dtw-text-gray-800`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="lg:dtw-py-2 lg:dtw-mt-4 dtw-mt-2 dtw-mb-6">
							<OverduePage />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>

			<Disclosure defaultOpen="true">
				{({ open }) => (
					<>
						<Disclosure.Button className="lg:dtw-border-b lg:dtw-pb-3 dtw-w-full dtw-py-2 dtw-lg:pt-0 dtw-inline-flex dtw-items-center ">
							<span className="dtw-text-gray-800 dtw-font-bold dtw-mr-1">
								Upcoming
							</span>
							<ChevronUpIcon
								className={`${
									open ? 'dtw-transform dtw-rotate-180' : ''
								} dtw-w-4 dtw-h-4 dtw-text-gray-800`}
							/>
						</Disclosure.Button>
						<Disclosure.Panel className="lg:dtw-py-2 lg:dtw-mt-4 dtw-mt-2">
							<UpcomingPage />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	)
}

export default Pages
