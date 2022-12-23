const discordCDNAttachmentRegex =
  /^https:\/\/cdn\.discordapp\.com\/attachments\/(?<basename>.+?)(?<extension>\.[^?]+)/i

const resizeMedia = (
  mediaURL: string,
  dimensions?: number[],
  format?: string
) => {
  const match = mediaURL.match(discordCDNAttachmentRegex)

  if (!match?.groups?.extension.match(/\.(gif|webp|apng)/)) {
    mediaURL = mediaURL.replace(
      discordCDNAttachmentRegex,
      `https://media.discordapp.net/attachments/$<basename>$<extension>?width=${
        dimensions?.[0] ?? 256
      }&height=${dimensions?.[1] ?? dimensions?.[0] ?? 256}&format=${
        format ?? 'webp'
      }`
    )
  }

  return mediaURL
}

export { resizeMedia }
