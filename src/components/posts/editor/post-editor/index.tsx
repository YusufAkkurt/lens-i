'use client';

import { useSession } from '@/app/(main)/session-provider';
import { LoadingButton } from '@/components/loading-button';
import { UserAvatar } from '@/components/user-avatar';
import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useSubmitFormMutation } from '../use-submit-mutation';
import './styles.css';

export const PostEditor = () => {
	const { user } = useSession();

	const mutation = useSubmitFormMutation();

	const edior = useEditor({
		extensions: [
			StarterKit.configure({ bold: false, italic: false }),
			Placeholder.configure({ placeholder: 'Share what you want them to hear?' })
		],
		immediatelyRender: false
	});

	const input = (edior?.getText({ blockSeparator: '\n' }) || '').trim();

	return (
		<section className="grid gap-5 rounded-xl bg-card p-5 shadow-sm">
			<div className="flex gap-5">
				<UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
				<EditorContent editor={edior} className="w-full max-h-80 overflow-y-auto bg-secondary rounded-xl px-5 py-3" />
			</div>

			<div className="flex justify-end">
				<LoadingButton
					className="min-w-20"
					loading={mutation.isPending}
					disabled={!input}
					onClick={async () => {
						await mutation.mutateAsync(input, {
							onSuccess: () => edior?.commands.clearContent()
						});
					}}>
					Post
				</LoadingButton>
			</div>
		</section>
	);
};
