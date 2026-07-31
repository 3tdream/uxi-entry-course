CREATE TABLE "progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"meeting_id" text NOT NULL,
	"part_id" text,
	"views" integer DEFAULT 1 NOT NULL,
	"first_opened_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_opened_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quiz_results" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"meeting_id" text NOT NULL,
	"part_id" text,
	"score" integer NOT NULL,
	"total" integer NOT NULL,
	"pct" integer NOT NULL,
	"completed_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "students" (
	"clerk_id" text PRIMARY KEY NOT NULL,
	"email" text,
	"name" text,
	"first_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_seen_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "progress_clerk_id_students_clerk_id_fk" FOREIGN KEY ("clerk_id") REFERENCES "public"."students"("clerk_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_results" ADD CONSTRAINT "quiz_results_clerk_id_students_clerk_id_fk" FOREIGN KEY ("clerk_id") REFERENCES "public"."students"("clerk_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "progress_student_part_uniq" ON "progress" USING btree ("clerk_id","meeting_id","part_id");--> statement-breakpoint
CREATE INDEX "progress_student_idx" ON "progress" USING btree ("clerk_id");--> statement-breakpoint
CREATE INDEX "quiz_student_idx" ON "quiz_results" USING btree ("clerk_id");--> statement-breakpoint
CREATE INDEX "quiz_part_idx" ON "quiz_results" USING btree ("meeting_id","part_id");--> statement-breakpoint
CREATE INDEX "students_email_idx" ON "students" USING btree ("email");--> statement-breakpoint
CREATE INDEX "students_last_seen_idx" ON "students" USING btree ("last_seen_at");