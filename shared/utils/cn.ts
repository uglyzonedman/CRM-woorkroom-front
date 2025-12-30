export const cn = (
	...classes: Array<string | undefined | false | null>
): string => {
	return classes.filter(Boolean).join(' ')
}
