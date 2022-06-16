export const fetchJobs = async () => {
    const response = await fetch("https://5f7998dbe402340016f9321f.mockapi.io/jobs")
    const data = await response.json()
    return data;
}

export const fetchEmployees = async (job: string = "") => {
    const response = await fetch(`https://5f7998dbe402340016f9321f.mockapi.io/employees?job=${job}`)
    const data = await response.json()
    return data;
}