import styles from '../styles/MembersCircleList.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {
	getMemberAvatar,
	getMemberProfileURL,
	geMembertBgGradient,
} from '../utils/utils';

export default function MemberAvatar({
	size = 70,
	name = '',
	avatar,
	background,
	hideName = false,
	...props
}) {
	background = geMembertBgGradient(background);
	const pathname = getMemberProfileURL(name);
	const avatarSrc = getMemberAvatar(avatar);

	return (
		<Link
			href={pathname}
			passHref
		>
			<a
				style={{ textAlign: 'center' }}
				aria-label={`View profile of ${name}`}
			>
				<div
					{...props}
					className={styles.members__avatar}
					style={{ background, height: size, width: size }}
				>
					<Image
						src={avatarSrc}
						alt={name}
						width={size - 10}
						height={size - 10}
						objectFit='cover'
					/>
				</div>
				{!hideName && (
					<h3 className={`${styles.members__name} typo-caption`}>
						{name}
					</h3>
				)}
			</a>
		</Link>
	);
}
