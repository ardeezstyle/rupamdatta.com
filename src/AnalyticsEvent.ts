export const AnalyticsEvent = {
  ResumeDownload: 'resume_download',
  LinkedInClick: 'linkedin_click',
  ContactSubmit: 'contact_submit',
  GithubClick: 'github_click',
  EmailClick: 'email_click',
} as const

export type AnalyticsEvent =
  (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent]
