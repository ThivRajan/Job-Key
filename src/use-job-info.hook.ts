import { useEffect, useState } from 'react'
import { JobInfo } from './JobInfo.model'

const INFO_KEY = 'jobKeyInfo'

export default function useJobInfo() {
	const [jobInfo, setJobInfo] = useState({
		description: '',
		resume: '',
		keywords: [] as string[],
	})

	useEffect(() => {
		const jobInfo = localStorage.getItem(INFO_KEY)
		if (!jobInfo) return

		const parsedJobInfo = JSON.parse(jobInfo) as JobInfo
		setJobInfo(parsedJobInfo)
	}, [])

	const setDescription = (description: string) => {
		updateJobInfo({ ...jobInfo, description })
	}

	const setResume = (resume: string) => {
		updateJobInfo({ ...jobInfo, resume })
	}

	const setKeywords = (keywords: string[]) => {
		updateJobInfo({ ...jobInfo, keywords })
	}

	const updateJobInfo = (updatedJobInfo: JobInfo) => {
		localStorage.setItem(INFO_KEY, JSON.stringify(updatedJobInfo))
		setJobInfo(updatedJobInfo)
	}

	return {
		jobInfo,
		setDescription,
		setResume,
		setKeywords,
	}
}
