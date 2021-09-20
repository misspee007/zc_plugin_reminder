import { useState } from 'react'
import React from 'react'
import { Switch } from '@headlessui/react'

export default function CustomSwitch({ label, onSwitch }) {
	const [enabled, setEnabled] = useState(false)

	const whenSwitched = (e) => {
		setEnabled(e)
		onSwitch(e)
	}

	return (
		<Switch.Group>
			<div className="dtw-flex dtw-items-center">
				<Switch.Label className="dtw-mr-4">
					<h3 className="dtw-font-semibold dtw-text-base dtw-leading-none">
						{label}
					</h3>
				</Switch.Label>
				<Switch
					checked={enabled}
					onChange={whenSwitched}
					className={`${
						enabled ? 'dtw-bg-brand-primary' : 'dtw-bg-gray-400'
					} dtw-relative dtw-inline-dtw-flex dtw-items-center dtw-h-4 dtw-rounded-full dtw-w-10 dtw-transition-colors focus:dtw-outline-none focus:dtw-ring-2 focus:dtw-ring-offset-2 focus:dtw-ring-brand-primary dtw-bg-opacity-25`}
				>
					<span
						className={`${
							enabled
								? 'dtw-translate-x-6 bg-brand-primary'
								: 'dtw-translate-x-0'
						} dtw-inline-block dtw-w-6 dtw-h-6 dtw-transform dtw-rounded-full dtw-bg-gray-500 dtw-transition-transform`}
					/>
				</Switch>
			</div>
		</Switch.Group>
	)
}

//how to use
//<CustomSwitch label="turn it on" onSwitch={(BooleanSwitchOnOff) => {}} />
