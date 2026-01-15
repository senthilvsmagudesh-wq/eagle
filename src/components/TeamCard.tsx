interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  description?: string;
}

const TeamCard = ({ name, role, image, description }: TeamCardProps) => {
  return (
    <div className="team-card group h-full flex flex-col">
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-crimson-light transition-all duration-300 group-hover:ring-primary/30">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {/* Online indicator */}
        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-success border-3 border-card" />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {description}
          </p>
        )}
      </div>

      {/* Social Links Placeholder */}
      <div className="mt-4 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
