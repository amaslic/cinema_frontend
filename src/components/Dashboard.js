import React from 'react'
import { useStore } from '../store/store'
import { AdminDashboard } from './admin/AdminDashboard'
import { UserDashboard } from './user/UserDashboard'

export const Dashboard = () => {
	const { isAdmin } = useStore( store => store.user );

	return (
		<div>
			{
				isAdmin === 1 ? <AdminDashboard /> : <UserDashboard />
			}
		</div>
	)
}
